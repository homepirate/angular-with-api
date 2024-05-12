import { Component, Input, inject } from '@angular/core';
import { Note } from '../reducers/counter.reducer';
import { Store } from '@ngrx/store';
import { deleteNote } from '../counter.actions';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [NgIf],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {

  @Input() note?: Note
  private store = inject(Store);


  deleteNote(title: string) {
    this.store.dispatch(deleteNote({ title }));
  }




}
