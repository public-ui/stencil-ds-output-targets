import { dashToPascalCase } from './utils';

/**
 * Creates an Angular module declaration for a component wrapper.
 * @param componentTagName The tag name of the Stencil component.
 * @returns The Angular module declaration as a string.
 */
export const generateAngularModuleForComponent = (componentTagName: string) => {
  const tagNameAsPascal = dashToPascalCase(componentTagName);
  const componentClassName = `${tagNameAsPascal}`;
  const moduleClassName = `${tagNameAsPascal}Module`;

  const moduleDefinition = `@NgModule({
  declarations: [ReplaceTagDirective, ${componentClassName}],
  exports: [${componentClassName}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
})
export class ${moduleClassName} { }`;

  return moduleDefinition;
};
