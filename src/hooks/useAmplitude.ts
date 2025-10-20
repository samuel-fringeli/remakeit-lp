import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import * as Experiment from '@amplitude/experiment-js-client';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { setVariants, selectExperimentIsLoaded } from 'app/store/experimentSlice';
import type { ExperimentVariant } from 'app/store/experimentSlice';

export const useAmplitude = (): void => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const isLoaded = useAppSelector(selectExperimentIsLoaded);

	useEffect(() => {
		// Skip if already loaded
		if (isLoaded) return;

		const initAmplitude = async () => {
			try {
				// Get device ID from URL parameters if available
				const deviceId = new URLSearchParams(location.search).get('amp_device_id') || undefined;

				// Initialize Amplitude
				amplitude.init('c18469c6348272b8728fc6b6cd21f9f9', {
					serverZone: 'EU',
					deviceId,
					autocapture: {
						attribution: true,
						sessions: true,
						pageViews: false,
						formInteractions: false,
						fileDownloads: false,
						elementInteractions: false,
					},
				});

				// Initialize Experiment client
				const experiment = Experiment.initializeWithAmplitudeAnalytics(
					'client-ShuLnKUyn1q735NDqZ5sj4hbduygI8TN',
					{
						serverZone: 'EU'
					}
				);

				// Fetch experiment variants
				await experiment.fetch();

				const fetchedVariants = experiment.all();

				// Transform variants to match our store structure
				const transformedVariants = Object.keys(fetchedVariants ?? {}).reduce((acc, variantKey) => {
					const variant = fetchedVariants[variantKey];

					if (variant) {
						acc[variantKey] = {
							key: variantKey,
							payload: variant.payload || {},
							value: (variant as any).value
						};
					}

					return acc;
				}, {} as Record<string, ExperimentVariant>);

				// Store variants in Redux
				dispatch(setVariants(transformedVariants));
				console.debug('Experiments fetched and stored:', transformedVariants);
			} catch (err) {
				console.error('Failed to initialize Amplitude or experiments:', err);
			}
		};

		initAmplitude();
	}, [location.search, dispatch, isLoaded]);
};

