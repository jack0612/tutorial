import {
    AfterContentInit,
    Component,
    ContentChild,
    EventEmitter,
    Input,
    Output,
    TemplateRef,
} from "@angular/core";

@Component({
    selector: "app-my-selector",
    templateUrl: "./my-selector.component.html",
})
export class MySelectorComponent<T extends { name: string }> implements AfterContentInit {
    picked: T;

    @Input() label: string;
    @Input() options: T[];

    @ContentChild("selectedTemplate", { static: false }) selectedTemplateRef: TemplateRef<any>;

    @ContentChild("optionTemplate", { static: false }) optionTemplateRef: TemplateRef<any>;

    @Output() selectionChanged = new EventEmitter<T>();

    selectOption(option: T) {
        this.picked = option;
        this.selectionChanged.emit(option);
    }

    ngAfterContentInit() {
        console.log('MySelectorComponent', { label: this.label, options: this.options })
        console.log('selectedTemplateRef', this.selectedTemplateRef)
        console.log('optionTemplateRef', this.optionTemplateRef)
    }


}