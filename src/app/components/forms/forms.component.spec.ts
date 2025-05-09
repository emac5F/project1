import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 
  it('title should be correct', () => {
    const fixture = TestBed.createComponent(FormsComponent);

    const title = fixture.nativeElement.querySelector('h1');

    expect(title.textContent).toBe('Testing Angular with Jasmine');
  });

  it('form should be invalid if required fields are empty', () => {
    const fixture = TestBed.createComponent(FormsComponent);
    const app = fixture.componentInstance;

    app.movieForm.controls['name'].setValue('');
    app.movieForm.controls['duration'].setValue('');

    expect(app.movieForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    const fixture = TestBed.createComponent(FormsComponent);
    const app = fixture.componentInstance;

    app.movieForm.controls['name'].setValue('Orgullo y prejuicio');
    app.movieForm.controls['duration'].setValue('200');

    expect(app.movieForm.valid).toBeTruthy();
  });

  it('btn should send the form when clicked', () => {
    const fixture = TestBed.createComponent(FormsComponent);
    const app = fixture.componentInstance;

    const sendBtn = fixture.nativeElement.querySelector('#send-btn');
    sendBtn.click();

    // para comprobar variable
    // expect(app.sentMsg).toBe('Enviado');
    
    // comprobar elementos dentro de la vista, el test rfresca los cambios de la vista
    fixture.detectChanges();
    const sentMsg = fixture.nativeElement.querySelector("#sent-msg");
    expect(sentMsg.textContent).toBe("Enviado");
  });
});
