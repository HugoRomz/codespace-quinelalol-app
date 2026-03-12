// GET /api/tournaments/:id
// Solo metadata y fases, SIN partidos

export const mockTournament = {
  id: 1,
  name: 'Worlds 2025',
  description: 'League of Legends World Championship',
  game: { id: 1, name: 'League of Legends' },
  start_date: '2025-09-28',
  end_date:   '2025-11-02',
  is_active: true,

  phases: [
    {
      id: 1,
      name: 'Play-in',
      format_type: 'BRACKET',   // ← tu BD dice format_type
      order_index: 1,
      is_locked: false,
      config_json: {
        elimination: 'single',
        best_of: 5,
      }
    },
    {
      id: 2,
      name: 'Swiss Stage',
      format_type: 'SWISS',
      order_index: 2,
      is_locked: false,
      config_json: {
        best_of: 1,               // rondas 1-3 son Bo1
        best_of_final_rounds: 3,  // rondas 4-5 son Bo3
        wins_to_advance: 3,
        losses_to_eliminate: 3,
        total_rounds: 5,
      }
    },
    {
      id: 4,
      name: 'Grupos',
      format_type: 'GROUP',
      order_index: 4,
      is_locked: false,
      config_json: {
        best_of: 1,
        num_groups: 4,
        teams_per_group: 4,
        slots_to_advance: 2,       // top 2 de cada grupo avanzan
      }
    },
    {
      id: 3,
      name: 'Knockout',
      format_type: 'BRACKET',
      order_index: 3,
      is_locked: false,
      config_json: {
        best_of: 5,
        rounds: ['Cuartos', 'Semifinales', 'Final'],
      }
    },
  ]
}