import { Component, AfterViewInit, ViewChild, Renderer2, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultipleSelectComponent),
  multi: true
};

@Component({
  selector: 'app-multiple-select',
  host: {
  	'(document:click)': 'handleClick($event)',
  },
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class MultipleSelectComponent implements ControlValueAccessor {
	@ViewChild('select') selectView;
	@ViewChild('selectOptions') selectOptionsView;

	//The internal data model
  private innerValue: any = '';

  //Placeholders for the callbacks which are later providesd
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  @Input() options: any = [];
  @Input() placeholder: string = 'Select...';
  @Input() placeholderSearch: string = 'Search...';
  @Input() noResultsFoundText: string = 'No results found';

	public isOpenOptions: boolean = false;
	public selectedOptions: any = [];
	public names: any = [];
	public filter: string = '';

  constructor(private renderer2: Renderer2) { }

  ngAfterViewInit() {
  	this.renderer2.setStyle(this.selectOptionsView.nativeElement, 'width', `${this.selectView.nativeElement.offsetWidth}px`);
  }

  //get accessor
  get value(): any {
    return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  selectOption(option) {
  	option.selected = !option.selected;

  	if (option.selected) {
  		this.selectedOptions.push(option);
  	} else {
  		this.selectedOptions = this.selectedOptions.filter(function (obj) {
  			return obj.value != option.value;
  		});
  	}

  	this.names = this.selectedOptions.map(function (obj) {
  		return obj.name;
		});

		this.value = this.selectedOptions.map(function (obj) {
  		return obj.value;
		});
  }

  openOptions() {
  	this.isOpenOptions = !this.isOpenOptions;
  }

  handleClick(event) {
    if (
    	this.isOpenOptions &&
    	event.target != this.selectView.nativeElement &&
    	event.target.parentElement != this.selectOptionsView.nativeElement &&
    	event.target.parentElement.className != 'select-search'
    ) {
      this.openOptions();
   	} else if (
   		event.target == this.selectView.nativeElement ||
   		event.target.parentElement == this.selectView.nativeElement
   	) {
   		this.openOptions();
   	}
  }

  filterOptions() {
  	let filter = this.filter.trim();
  	if (!filter) {
  		return this.options;
  	}
  	return this.options.filter(option => option.name.indexOf(filter) !== -1);
  }

  cleanFilter() {
  	this.filter = '';
  }

}