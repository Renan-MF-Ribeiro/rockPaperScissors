import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly VICTORY_KEY = 'victories';

  constructor() {}

  // Método para salvar o valor inicial de vitórias no sessionStorage
  saveInitialVictories(): void {
    const initialVictories = 0;
    sessionStorage.setItem(this.VICTORY_KEY, initialVictories.toString());
  }

  // Método para atualizar o número de vitórias no sessionStorage
  updateVictories(): void {
    const currentVictories = this.getVictories();
    const updatedVictories = currentVictories + 1;
    sessionStorage.setItem(this.VICTORY_KEY, updatedVictories.toString());
  }

  // Método para obter o número atual de vitórias do sessionStorage
  getVictories(): number {
    const victories = sessionStorage.getItem(this.VICTORY_KEY);
    return victories ? parseInt(victories, 10) : 0;
  }
}
