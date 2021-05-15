  
declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
  }
    
  declare module "*.svg" {
    import React = require("react");
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }

  declare module "*.png" {
    const value: any;
    export default value;
  }

  declare module "*jpg" {
    const value: any;
    export default value;
  }