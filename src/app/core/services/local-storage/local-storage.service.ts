import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  
  getItem(key: string): string | null {
    // Implement logic to simulate localStorage behavior (e.g., using a Map)
    return typeof window !== 'undefined' && window.localStorage
      ? localStorage.getItem(key) // Access localStorage if available (browser)
      : null; // Return null if not available (e.g., during development)
  }

  setItem(key: string, value: string): void {
    if(typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
    } // Access localStorage if available (browser)

  }

  removeItem(key: string): void {
    if(typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(key);
    } // Access localStorage if available (browser)
  }
}
