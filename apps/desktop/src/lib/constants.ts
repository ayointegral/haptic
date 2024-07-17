import type { CollectionSettingsParams, ShortcutParams } from './types';

export const SHORTCUTS: Record<string, ShortcutParams> = {
	'editor:toggle-mode': { command: true, key: 'e' },
	'editor:search': { command: true, key: 'f' },
	'command:open-note': { command: true, key: 'j' },
	'command:move-note': { command: true, shift: true, key: 'm' },
	'notes:search': { command: true, shift: true, key: 'f' },
	'notes:toggle-sidebar': { command: true, shift: true, key: 's' },
	'notes:create': { command: true, key: 'n' },
	'note:save': { command: true, key: 's', hover: true },
	'note:duplicate': { key: 'd', hover: true },
	'note:rename': { key: 'r', hover: true },
	'note:delete': { command: true, key: 'Backspace', hover: true },
	'note:show-in-folder': { shift: true, key: 'f', hover: true },
	'note:toggle-details': { command: true, key: 'i' },
	'folder:create': { key: 'f', hover: true },
	'folder:create-note': { key: 'n', hover: true },
	'folder:rename': { key: 'r', hover: true },
	'folder:show-in-folder': { shift: true, key: 'f', hover: true },
	'folder:delete': { command: true, key: 'Backspace', hover: true },
	'app:settings': { command: true, key: ',' },
	'app:shortcuts': { command: true, key: '/' },
	'app:open-collection': { command: true, key: 'o' },
	'settings:toggle-theme': { command: true, key: 't', shift: true }
};

export const BASE_APP_SETTINGS = {
	theme: 'dark',
	theme_mode: 'system',
	interface_font: 'system-ui'
};

export const BASE_COLLECTION_SETTINGS: CollectionSettingsParams = {
	editor: {
		font: 'system-ui',
		size: 14,
		auto_save: true,
		auto_save_debounce: 750,
		auto_correct: false,
		spell_check: false,
		show_inline_title: true,
		show_line_numbers: false,
		show_toolbar: true
	},
	notes: {
		trash_dir: 'system',
		excluded_files: []
	}
};
