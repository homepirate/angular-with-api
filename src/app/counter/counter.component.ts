import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Note } from '../reducers/counter.reducer';
import { addNote, deleteNote, resetNotes } from '../counter.actions';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})


    
export class CounterComponent {
notes$?: Observable<Note[]>;
  private store = inject(Store);

  newNote = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
    });;


  constructor(){
   this.notes$ = this.store.select('notes');
    }

    addNote() {
      const title = this.newNote.value.title;
      const content = this.newNote.value.content;
    
      if (title !== undefined && title !== null && content !== undefined && content !== null) {
        this.store.dispatch(addNote({ title, content }));
      }
    }
  
    deleteNote(title: string) {
      this.store.dispatch(deleteNote({ title }));
    }
    
    resetNotes() {
      this.store.dispatch(resetNotes());
    }
  }

