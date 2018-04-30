import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { QuantitySelectorComponent } from './product-selector.component'

describe('ProductSelectorComponent', () => {
	let component: QuantitySelectorComponent
	let fixture: ComponentFixture<QuantitySelectorComponent>

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ QuantitySelectorComponent ]
			}).compileComponents()
		})
	)

	beforeEach(() => {
		fixture = TestBed.createComponent(QuantitySelectorComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
