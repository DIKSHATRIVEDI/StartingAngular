import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FormsModule), // ✅ Correct way to provide FormsModule
    provideRouter([]),
  ],
};
