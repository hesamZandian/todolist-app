export {};

interface ApiResponse {
  status: number;
  data: any;
  message: string;
}

declare global {
  type GRequestMethod = 'GET' | 'POST';
  type GResponse = ApiResponse;
}
