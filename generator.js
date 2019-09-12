const generator = require("component-file-generator");
generator.exec([
  {
    comp: {
      root: "./src/components",
      structure: {
        name: "[name]",
        children: [
          {
            type: "file",
            name: "[name]-style.scss"
          },
          {
            type: "file",
            name: "[name].js",
            content: `import React from 'react';\nimport './[name]-style.scss';\n\n const [name] = () => {\n\t// instruction\n\t} \n\nexport default [name];`
          },
          {
            type: "file",
            name: "[name]Container.js",
            content: `import React from 'react';\n\n const [name]Container = () => {\n\t// instruction\n\t} \n\nexport default [name]Container;`
          }
        ]
      }
    }
  },
  {
    kit: {
      root: "./src/kit",
      structure: {
        name: "[name]",
        children: [
          {
            type: "file",
            name: "[name]-style.scss"
          },
          {
            type: "file",
            name: "[name].js",
            content: `import React from 'react';\nimport './[name]-style.scss';\n\n const [name] = () => {\n\t// instruction\n\t} \n\nexport default [name];`
          },
          {
            type: "file",
            name: "[name]Container.js",
            content: `import React from 'react';\n\n const [name]Container = () => {\n\t// instruction\n\t} \n\nexport default [name]Container;`
          }
        ]
      }
    }
  }
]);
