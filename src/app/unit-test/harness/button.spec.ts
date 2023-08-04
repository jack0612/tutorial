// import { render, screen } from '@testing-library/angular';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBarHarness } from '@angular/material/snack-bar/testing';
import { By } from '@angular/platform-browser';
import { SnackBarComponent } from './button.component';

xdescribe('button', () => {
    let component: SnackBarComponent;
    let fixture: ComponentFixture<SnackBarComponent>;
    let loader: HarnessLoader


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SnackBarComponent],
            imports: [MatSnackBarModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SnackBarComponent);
        component = fixture.componentInstance;
        loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    });
    it('shows a message on click (Test Harness)', async () => {
        const button: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
        console.log('button', button)
        button.click();
        fixture.detectChanges();
        await fixture.whenStable();
        const snackbarHarness = await loader.getHarness(MatSnackBarHarness);
        expect(await snackbarHarness.getMessage()).toMatch(/Pizza Party!!!/i);
    });
})


