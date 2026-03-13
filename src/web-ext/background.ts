import './polyfills';
import { Container } from 'services';
import { ExtensionUpdater } from 'plugin/extension-updater';
import { DatabaseUpdater } from 'plugin/database-updater';
import { OmniBox } from 'plugin/omnibox';
import { Suggest } from 'plugin/suggest';
import { TagDatabase } from 'plugin/tag-database';
import { TagContextMenu } from 'plugin/tag-context-menu';
import { ImageContextMenu } from 'plugin/image-context-menu';

Object.defineProperty(globalThis, 'Container', { value: Container, enumerable: true });

// In MV3 the service worker can be restarted at any time.  Context menus persist
// across restarts, so creating them again would trigger "duplicate id" errors.
// Clear all existing context menus before re-registering them.
if (chrome.contextMenus) {
    void chrome.contextMenus.removeAll();
}

Container.get(ExtensionUpdater);
Container.get(DatabaseUpdater);
Container.get(TagDatabase);
Container.get(Suggest);
Container.get(OmniBox);
Container.get(TagContextMenu);
Container.get(ImageContextMenu);
