import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    ViewChild,
    EventEmitter,
    Output,
    ContentChild,
    TemplateRef
} from "@angular/core";
import { CallbackTemplateDirective } from "./callback-template.directive";

@Component({
    selector: "file-select",
    template: `
      <input
        #fileInput
        type="file"
        style="display: none;"
        [attr.accept]="accept"
        [attr.multiple]="multiple"
        (change)="onFileSelectionChanged($event)"
      />
      <ng-container
        [ngTemplateOutlet]="callback.template"
        [ngTemplateOutletContext]="templateContext"
      ></ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileSelectComponent {
    @ViewChild("fileInput") fileInput: ElementRef<HTMLInputElement>;
    @ContentChild(CallbackTemplateDirective) callback: CallbackTemplateDirective;
    @Input() accept: string;
    @Input() multiple: boolean;
    @Output() fileSelect = new EventEmitter();
    templateContext = {
        $implicit: {
            // this has to be a lambda or else we get `this` problems
            openFileSelectDialog: () => this.openFileSelectDialog()
        }
    };

    openFileSelectDialog() {
        this.fileInput.nativeElement.click();
    }

    onFileSelectionChanged(event: Event): void {
        const selectedFiles = (event.target as HTMLInputElement).files;
        this.fileSelect.next(selectedFiles);
    }
}
