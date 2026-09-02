import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.html',
  styleUrl: './cursor.css'
})
export class Cursor implements AfterViewInit {
  /* Cursor elements */
  private dot!: HTMLElement;
  private ring!: HTMLElement;
  private orbit!: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.dot = this.elementRef.nativeElement.querySelector('.cursor-dot');
    this.ring = this.elementRef.nativeElement.querySelector('.cursor-ring');
    this.orbit = this.elementRef.nativeElement.querySelector('.cursor-orbit');
    this.initCursor();
  }

  /* Start cursor animation */
  private initCursor(): void {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      this.dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      this.orbit.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      this.ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(animate);
    };

    animate();

    this.renderer.listen('document', 'mouseover', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const interactive = target.closest('[data-cursor]');

      if (interactive) {
        this.renderer.addClass(this.ring, 'cursor-active');
        this.renderer.addClass(this.orbit, 'cursor-active');
      } else {
        this.renderer.removeClass(this.ring, 'cursor-active');
        this.renderer.removeClass(this.orbit, 'cursor-active');
      }
    });
  }
}