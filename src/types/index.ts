export type UnitId = 'luna' | 'nagi' | 'gamma' | 'delta' | 'epsilon';

export interface Unit {
  id: UnitId;
  name: string;
  description: string;
  color: string;
  avatarUrl?: string;
}

export const units: Unit[] = [
  { id: 'luna', name: 'Luna', description: '司令室直属・統括AI', color: 'blue' },
  { id: 'nagi', name: 'Nagi', description: '戦術解析・データ特化', color: 'green' },
  { id: 'gamma', name: 'Gamma', description: '後方支援・技術メンテナンス', color: 'purple' },
  { id: 'delta', name: 'Delta', description: '防衛・セキュリティ担当', color: 'red' },
  { id: 'epsilon', name: 'Epsilon', description: '情報収集・潜入捜査', color: 'yellow' },
];

export const getUnitById = (id: UnitId) => units.find(u => u.id === id) || units[0];
