export interface GoogleReview {
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  rating: number;
  text: string;
  relativePublishTime?: string;
  googleMapsUri?: string;
}

export interface GoogleReviewsResponse {
  reviews: GoogleReview[];
  rating?: number;
  userRatingCount?: number;
  enabled: boolean;
}
