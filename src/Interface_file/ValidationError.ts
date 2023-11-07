export default interface ValidationError {
    message: string;
    errors: Record<string, string[]>
  }