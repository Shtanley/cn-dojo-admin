// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			admin: import('$lib/server/auth').SessionValidationResult['admin'];
			session: import('$lib/server/auth').SessionValidationResult['session'];
		}
	}
}

export {};
