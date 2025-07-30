// src/auth/types/jwt-payload.interface.ts

export interface JwtPayload {
  sub: number;
  email: string;
  name: string;
}
export interface JwtPayloadWithOptionalName {
  sub: number;
  email: string;
  name?: string; // Name is optional
}
