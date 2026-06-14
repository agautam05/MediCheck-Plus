// API Response wrapper matching backend ApiResponse<T>
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

// Session (Auth)
export interface SessionResponse {
  sessionToken: string;
  jwt: string;
  language: string;
  createdAt: string;
  expiresAt: string;
}

// Medicine Scan
export interface DosageDto {
  adult: string;
  child: string;
}

export interface ScanResponse {
  brandName: string;
  genericName: string;
  category: string;
  indication: string;
  dosage: DosageDto;
  sideEffects: string[];
  warnings: string[];
  prescriptionRequired: boolean;
  confidence: number;
  error?: string;
}

// Triage (Symptom Assessment)
export interface TriageResponse {
  level: string;
  summary: string;
  homeAdvice: string[];
  clinicReason: string;
  emergencySigns: string[];
  followUpQuestion: string | null;
}

// Drug Interaction
export interface InteractionItem {
  drugs: string[];
  severity: string;
  description: string;
  recommendation: string;
}

export interface InteractionResponse {
  interactions: InteractionItem[];
  overallSafety: string;
}