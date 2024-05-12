import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Note } from '../reducers/counter.reducer';
import { addNote, resetNotes } from '../counter.actions';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf, NgFor, NoteComponent],
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
  
    
    resetNotes() {
      this.store.dispatch(resetNotes());
    }
  }

