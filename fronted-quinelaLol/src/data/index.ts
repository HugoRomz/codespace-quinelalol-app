// src/data/mock/index.js
import { mockTournament }  from './tournaments.ts'
import { mockPlayin }      from './fases/playin.ts'
import { mockSwiss }       from './fases/swiss.ts'
import { mockKnockout }    from './fases/knockout.ts'

// Simula lo que haría tu store al cargar fase por fase
export const mockPhases = {
  1: mockPlayin,
  2: mockSwiss,
  3: mockKnockout,
}

export { mockTournament }