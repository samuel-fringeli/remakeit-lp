import { useEffect, useState } from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import * as Experiment from '@amplitude/experiment-js-client';
import { useLocation } from 'react-router-dom';

interface Variant {
	key: string;
	payload: Record<string, unknown>;
	value?: string;
}

interface UseAmplitudeReturn {
	variants: Record<string, Variant>;
	isLoading: boolean;
	error: Error | null;
}

export const useAmplitude = (): UseAmplitudeReturn => {
	const location = useLocation();
	const [variants, setVariants] = useState<Record<string, Variant>>({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
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

				// Transform variants to match our store structure and keep variant value
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
				}, {} as Record<string, Variant>);

				setVariants(transformedVariants);
				setIsLoading(false);
			} catch (err) {
				console.error('Failed to initialize Amplitude or experiments:', err);
				setError(err instanceof Error ? err : new Error('Unknown error'));
				setIsLoading(false);
			}
		};

		initAmplitude();
	}, [location.search]);

	return { variants, isLoading, error };
};

