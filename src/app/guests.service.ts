import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class GuestsService {

  constructor(private http: HttpClient) { }

  private guestsSource = new BehaviorSubject<any>([])
  allGuests = this.guestsSource.asObservable()

  getGuests() {
    this.http.get('/api/guests').subscribe(
      data => {
        this.guestsSource.next(data)
      }, error => {
        console.error(error);
      });
  }

  updateGuest(guest) {
    return this.http.put(`/api/guests`, guest);
  }

  // createGoal(goal: string) {
  //   this.http.post('/api/goals', { goal }).subscribe(data => this.getGoals())
  // }

  // deleteGoal(id: string) {
  //   this.http.delete(`/api/goals/${id}`).subscribe(data => this.getGoals())
  // }

}
