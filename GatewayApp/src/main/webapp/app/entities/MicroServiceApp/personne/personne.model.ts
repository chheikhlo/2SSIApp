export interface IPersonne {
  id?: number;
  nom?: string | null;
  prenom?: string | null;
  tel?: number | null;
}

export class Personne implements IPersonne {
  constructor(public id?: number, public nom?: string | null, public prenom?: string | null, public tel?: number | null) {}
}

export function getPersonneIdentifier(personne: IPersonne): number | undefined {
  return personne.id;
}
