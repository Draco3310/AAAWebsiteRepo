import type { GoogleReview, GoogleReviewsResponse } from './types';
import { siteConfig } from '../../config/site';

export async function fetchGoogleReviews(): Promise<GoogleReviewsResponse> {
  const { enabled, placeId, apiKey } = siteConfig.googleReviews;

  if (!enabled || !placeId || !apiKey) {
    return {
      reviews: [],
      enabled: false
    };
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount&key=${apiKey}`;
    const res = await fetch(url);
    
    if (!res.ok) {
      return { reviews: [], enabled: false };
    }

    const data = await res.json();
    const rawReviews = data.reviews || [];

    const reviews: GoogleReview[] = rawReviews.map((r: any) => ({
      authorName: r.authorAttribution?.displayName || "Google Reviewer",
      authorUri: r.authorAttribution?.uri,
      authorPhotoUri: r.authorAttribution?.photoUri,
      rating: r.rating || 5,
      text: r.originalText?.text || r.text?.text || "",
      relativePublishTime: r.relativePublishTimeDescription,
      googleMapsUri: r.googleMapsUri
    }));

    return {
      reviews,
      rating: data.rating,
      userRatingCount: data.userRatingCount,
      enabled: true
    };
  } catch (err) {
    return {
      reviews: [],
      enabled: false
    };
  }
}
