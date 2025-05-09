import { UXP_Manifest, UXP_Config } from "vite-uxp-plugin";
import { version } from "./package.json";

const extraPrefs = {
  hotReloadPort: 8080,
  copyZipAssets: ["public-zip/*"],
};

const manifest: UXP_Manifest = {
  id: "suitably.light.plugin",
  name: "SuitablyLight",
  version,
  main: "index.html",
  manifestVersion: 6,
  host: [
        {
      app: "PS",
      minVersion: "24.2.0",
    },
                  ],
  entrypoints: [
    {
      type: "panel",
      id: "suitably.light.plugin.panel",
      label: {
        default: "SuitablyLight",
      },
      minimumSize: { width: 230, height: 200 },
      maximumSize: { width: 2000, height: 2000 },
      preferredDockedSize: { width: 230, height: 300 },
      preferredFloatingSize: { width: 450, height: 400 },
      icons: [
        {
          width: 23,
          height: 23,
          path: "icons/dark.png",
          scale: [1, 2],
          theme: ["darkest", "dark", "medium"],
        },
        {
          width: 23,
          height: 23,
          path: "icons/light.png",
          scale: [1, 2],
          theme: ["lightest", "light"],
        },
      ],
    },

    
    // * Example of a UXP Secondary panel
    // * Must also enable the <uxp-panel panelid="suitably.light.plugin.settings">
    //* tag in your entrypoint (.tsx, .vue, or .svelte) file
    // {
    //   type: "panel",
    //   id: "suitably.light.plugin.settings",
    //   label: {
    //     default: "Bolt UXP Settings",
    //   },
    //   minimumSize: { width: 230, height: 200 },
    //   maximumSize: { width: 2000, height: 2000 },
    //   preferredDockedSize: { width: 230, height: 300 },
    //   preferredFloatingSize: { width: 230, height: 300 },
    //   icons: [
    //     {
    //       width: 23,
    //       height: 23,
    //       path: "icons/dark-panel.png",
    //       scale: [1, 2],
    //       theme: ["darkest", "dark", "medium"],
    //       species: ["chrome"],
    //     },
    //     {
    //       width: 23,
    //       height: 23,
    //       path: "icons/light-panel.png",
    //       scale: [1, 2],
    //       theme: ["lightest", "light"],
    //       species: ["chrome"],
    //     },
    //   ],
    // },

    // * Example of a UXP Command
    // {
    //   type: "command",
    //   id: "showAbout",
    //   label: {
    //     default: "Bolt UXP Command",
    //   },
    // },

      ],
  featureFlags: {
    enableAlerts: true,
  },
  requiredPermissions: {
    localFileSystem: "fullAccess",
    launchProcess: {
      schemes: ["https", "slack", "file", "ws"],
      extensions: [".xd", ".psd", ".bat", ".cmd", ""],
    },
    network: {
      domains: [
                "https://hyperbrew.co",
        "https://github.com",
        "https://vitejs.dev",
        "https://svelte.dev",
        "https://reactjs.org",
        "https://vuejs.org/",
                `ws://localhost:${extraPrefs.hotReloadPort}`, // Required for hot reload
      ],
    },
    clipboard: "readAndWrite",
    webview: {
      allow: "yes",
      domains: ["https://*.hyperbrew.co"],
    },
    ipc: {
      enablePluginCommunication: true,
    },
    allowCodeGenerationFromStrings: true,

  },
    icons: [
    {
      width: 48,
      height: 48,
      path: "icons/plugin-icon.png",
      scale: [1, 2],
      theme: ["darkest", "dark", "medium", "lightest", "light", "all"],
      species: ["pluginList"],
    },
  ],
};

export const config: UXP_Config = {
  manifest,
  ...extraPrefs,
};
