export const mockKnockout = {
  phase_id: 3,
  matches: [

    // ── CUARTOS ───────────────────────────────
    { id: 301, phase_id: 3, match_group: 'quarterfinals', slot_index: 0,
      team_a: { id: 24, tag: 'T1',  region: 'LCK' }, team_b: { id: 26, tag: 'AL', region: 'LPL' },
      winner_team_id: 24, score_a: 3, score_b: 2, best_of: 5, status: 'FINISHED',
      scheduled_at: '2025-10-31T09:00:00Z' },

    { id: 302, phase_id: 3, match_group: 'quarterfinals', slot_index: 1,
      team_a: { id: 31, tag: 'G2',  region: 'LEC' }, team_b: { id: 34, tag: 'TES', region: 'LPL' },
      winner_team_id: 34, score_a: 1, score_b: 3, best_of: 5, status: 'FINISHED',
      scheduled_at: '2025-10-31T12:00:00Z' },

    { id: 303, phase_id: 3, match_group: 'quarterfinals', slot_index: 2,
      team_a: { id: 30, tag: 'GEN', region: 'LCK' }, team_b: { id: 32, tag: 'HLE',  region: 'LCK' },
      winner_team_id: 30, score_a: 3, score_b: 1, best_of: 5, status: 'FINISHED',
      scheduled_at: '2025-11-01T09:00:00Z' },

    { id: 304, phase_id: 3, match_group: 'quarterfinals', slot_index: 3,
      team_a: { id: 29, tag: 'KT',  region: 'LCK' }, team_b: { id: 25, tag: 'CFO', region: 'APAC' },
      winner_team_id: null, score_a: 3, score_b: 0, best_of: 5, status: 'FINISHED',
      scheduled_at: '2025-11-01T12:00:00Z' },

    // ── SEMIS ─────────────────────────────────
    { id: 305, phase_id: 3, match_group: 'semifinals', slot_index: 0,
      team_a: { id: 24, tag: 'T1',  region: 'LCK' }, team_b: { id: 34, tag: 'TES', region: 'LPL' },
      winner_team_id: 24, score_a: 3, score_b: 0, best_of: 5, status: 'FINISHED',
      scheduled_at: '2025-11-05T09:00:00Z' },

    { id: 306, phase_id: 3, match_group: 'semifinals', slot_index: 1,
      team_a: { id: 30, tag: 'GEN', region: 'LCK' }, team_b: { id: 29, tag: 'KT',  region: 'LCK' },
      winner_team_id: 29, score_a: 1, score_b: 3, best_of: 5, status: 'FINISHED',
      scheduled_at: '2025-11-06T09:00:00Z' },

    // ── FINAL ─────────────────────────────────
    { id: 307, phase_id: 3, match_group: 'final', slot_index: 0,
      team_a:  { id: 24, tag: 'T1', region: 'LCK' },
      team_b:  { id: 29, tag: 'KT', region: 'LCK' },
      winner_team_id: 24, score_a: 3, score_b: 2, best_of: 5, status: 'FINISHED',
      scheduled_at: '2025-11-09T12:00:00Z' },
  ]
}