import { generateAngularModuleForComponent } from '../src/generate-angular-modules';

describe('generateAngularModuleForComponent()', () => {
  it('should generate an Angular module for each component', () => {
    const modules = generateAngularModuleForComponent('my-component');

    expect(modules).toEqual(`@NgModule({
  declarations: [ReplaceTagDirective, MyComponent],
  exports: [MyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
})
export class MyComponentModule { }`);
  });
});
