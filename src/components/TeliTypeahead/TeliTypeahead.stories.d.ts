/// <reference types="react" />
/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import TeliTypeahead from "./TeliTypeahead";
import { MultiSelect, FreeSolo } from "./stories";
declare const meta: {
    component: typeof TeliTypeahead;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        errorMessage?: string | undefined;
        queryParamKey: string;
        url: string;
        onTransform?: ((data: any) => any) | undefined;
        defaultChecked?: boolean | undefined;
        defaultValue?: unknown;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;
        accessKey?: string | undefined;
        autoFocus?: boolean | undefined;
        className?: string | undefined;
        contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: (boolean | "true" | "false") | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        nonce?: string | undefined;
        slot?: string | undefined;
        spellCheck?: (boolean | "true" | "false") | undefined;
        style?: import("react").CSSProperties | undefined;
        tabIndex?: number | undefined;
        title?: string | undefined;
        translate?: "yes" | "no" | undefined;
        radioGroup?: string | undefined;
        role?: import("react").AriaRole | undefined;
        about?: string | undefined;
        content?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        rel?: string | undefined;
        resource?: string | undefined;
        rev?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;
        inputMode?: "search" | "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
        is?: string | undefined;
        "aria-activedescendant"?: string | undefined;
        "aria-atomic"?: (boolean | "true" | "false") | undefined;
        "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
        "aria-braillelabel"?: string | undefined;
        "aria-brailleroledescription"?: string | undefined;
        "aria-busy"?: (boolean | "true" | "false") | undefined;
        "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
        "aria-colcount"?: number | undefined;
        "aria-colindex"?: number | undefined;
        "aria-colindextext"?: string | undefined;
        "aria-colspan"?: number | undefined;
        "aria-controls"?: string | undefined;
        "aria-current"?: boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time" | undefined;
        "aria-describedby"?: string | undefined;
        "aria-description"?: string | undefined;
        "aria-details"?: string | undefined;
        "aria-disabled"?: (boolean | "true" | "false") | undefined;
        "aria-dropeffect"?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
        "aria-errormessage"?: string | undefined;
        "aria-expanded"?: (boolean | "true" | "false") | undefined;
        "aria-flowto"?: string | undefined;
        "aria-grabbed"?: (boolean | "true" | "false") | undefined;
        "aria-haspopup"?: boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree" | undefined;
        "aria-hidden"?: (boolean | "true" | "false") | undefined;
        "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
        "aria-keyshortcuts"?: string | undefined;
        "aria-label"?: string | undefined;
        "aria-labelledby"?: string | undefined;
        "aria-level"?: number | undefined;
        "aria-live"?: "off" | "assertive" | "polite" | undefined;
        "aria-modal"?: (boolean | "true" | "false") | undefined;
        "aria-multiline"?: (boolean | "true" | "false") | undefined;
        "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
        "aria-orientation"?: "horizontal" | "vertical" | undefined;
        "aria-owns"?: string | undefined;
        "aria-placeholder"?: string | undefined;
        "aria-posinset"?: number | undefined;
        "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
        "aria-readonly"?: (boolean | "true" | "false") | undefined;
        "aria-relevant"?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
        "aria-required"?: (boolean | "true" | "false") | undefined;
        "aria-roledescription"?: string | undefined;
        "aria-rowcount"?: number | undefined;
        "aria-rowindex"?: number | undefined;
        "aria-rowindextext"?: string | undefined;
        "aria-rowspan"?: number | undefined;
        "aria-selected"?: (boolean | "true" | "false") | undefined;
        "aria-setsize"?: number | undefined;
        "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
        "aria-valuemax"?: number | undefined;
        "aria-valuemin"?: number | undefined;
        "aria-valuenow"?: number | undefined;
        "aria-valuetext"?: string | undefined;
        dangerouslySetInnerHTML?: {
            __html: string | TrustedHTML;
        } | undefined;
        onCopy?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
        onCopyCapture?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
        onCut?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
        onCutCapture?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
        onPaste?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
        onPasteCapture?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
        onCompositionEnd?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionStart?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionUpdate?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLDivElement> | undefined;
        onFocus?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
        onFocusCapture?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
        onBlur?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
        onBlurCapture?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
        onChange?: ((event: import("react").SyntheticEvent<Element, Event>, value: unknown, reason: import("@mui/base").AutocompleteChangeReason, details?: import("@mui/base").AutocompleteChangeDetails<unknown> | undefined) => void) | undefined;
        onChangeCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onBeforeInput?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onBeforeInputCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onInput?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onInputCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onReset?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onResetCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onSubmit?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onSubmitCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onInvalid?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onInvalidCapture?: import("react").FormEventHandler<HTMLDivElement> | undefined;
        onLoad?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onError?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onErrorCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onKeyDown?: ((event: import("react").KeyboardEvent<HTMLDivElement> & {
            defaultMuiPrevented?: boolean | undefined;
        }) => void) | undefined;
        onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyPress?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyUp?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLDivElement> | undefined;
        onAbort?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onAbortCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onCanPlay?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onCanPlayCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onCanPlayThrough?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onDurationChange?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onDurationChangeCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onEmptied?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onEmptiedCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onEncrypted?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onEncryptedCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onEnded?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onEndedCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadedData?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadedDataCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadedMetadata?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadStart?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onLoadStartCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onPause?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onPauseCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onPlay?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onPlayCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onPlaying?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onPlayingCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onProgress?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onProgressCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onRateChange?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onRateChangeCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onResize?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onResizeCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSeeked?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSeekedCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSeeking?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSeekingCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onStalled?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onStalledCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSuspend?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSuspendCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onTimeUpdate?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onVolumeChange?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onWaiting?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onWaitingCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onAuxClick?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onAuxClickCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onClick?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onClickCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onContextMenu?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onContextMenuCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onDoubleClick?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onDoubleClickCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onDrag?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragEnd?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragEndCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragEnter?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragEnterCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragExit?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragExitCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragLeave?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragLeaveCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragOver?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragOverCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragStart?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDragStartCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDrop?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onDropCapture?: import("react").DragEventHandler<HTMLDivElement> | undefined;
        onMouseDown?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseDownCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseEnter?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseLeave?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseMove?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseMoveCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseOut?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseOutCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseOver?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseOverCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseUp?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseUpCapture?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onSelect?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onSelectCapture?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
        onTouchCancel?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchCancelCapture?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchEnd?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchEndCapture?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchMove?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchMoveCapture?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchStart?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onTouchStartCapture?: import("react").TouchEventHandler<HTMLDivElement> | undefined;
        onPointerDown?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerDownCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerMove?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerMoveCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerUp?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerUpCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerCancel?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerCancelCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerEnter?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerEnterCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerLeave?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerLeaveCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerOver?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerOverCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerOut?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onPointerOutCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onGotPointerCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onLostPointerCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLDivElement> | undefined;
        onScroll?: import("react").UIEventHandler<HTMLDivElement> | undefined;
        onScrollCapture?: import("react").UIEventHandler<HTMLDivElement> | undefined;
        onWheel?: import("react").WheelEventHandler<HTMLDivElement> | undefined;
        onWheelCapture?: import("react").WheelEventHandler<HTMLDivElement> | undefined;
        onAnimationStart?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationEnd?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationIteration?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLDivElement> | undefined;
        onTransitionEnd?: import("react").TransitionEventHandler<HTMLDivElement> | undefined;
        onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLDivElement> | undefined;
        ref?: import("react").Ref<unknown> | undefined;
        width?: number | undefined;
        mode?: "search" | undefined;
        open?: boolean | undefined;
        disablePortal?: boolean | undefined;
        onClose?: ((event: import("react").SyntheticEvent<Element, Event>, reason: import("@mui/base").AutocompleteCloseReason) => void) | undefined;
        label?: import("react").ReactNode;
        disabled?: boolean | undefined;
        maxHeight?: number | undefined;
        value?: unknown;
        autoComplete?: boolean | undefined;
        loading?: boolean | undefined;
        multiple?: boolean | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        fullWidth?: boolean | undefined;
        error?: boolean | undefined;
        disabledItemsFocusable?: boolean | undefined;
        disableListWrap?: boolean | undefined;
        startAdornment?: import("react").ReactNode;
        onOpen?: ((event: import("react").SyntheticEvent<Element, Event>) => void) | undefined;
        forcePopupIcon?: boolean | "auto" | undefined;
        getLimitTagsText?: ((more: number) => import("react").ReactNode) | undefined;
        loadingText?: import("react").ReactNode;
        limitTags?: number | undefined;
        noOptionsText?: import("react").ReactNode;
        renderGroup?: ((params: import("@mui/material").AutocompleteRenderGroupParams) => import("react").ReactNode) | undefined;
        renderOption?: ((props: import("react").HTMLAttributes<HTMLLIElement>, option: unknown, state: import("@mui/material").AutocompleteRenderOptionState, ownerState: import("@mui/material").AutocompleteOwnerState<unknown, boolean, boolean, boolean, "div">) => import("react").ReactNode) | undefined;
        renderTags?: ((value: unknown[], getTagProps: import("@mui/material").AutocompleteRenderGetTagProps, ownerState: import("@mui/material").AutocompleteOwnerState<unknown, boolean, boolean, boolean, "div">) => import("react").ReactNode) | undefined;
        unstable_classNamePrefix?: string | undefined;
        unstable_isActiveElementInListbox?: ((listbox: import("react").RefObject<HTMLElement>) => boolean) | undefined;
        autoHighlight?: boolean | undefined;
        autoSelect?: boolean | undefined;
        blurOnSelect?: boolean | "mouse" | "touch" | undefined;
        clearOnBlur?: boolean | undefined;
        clearOnEscape?: boolean | undefined;
        componentName?: string | undefined;
        disableClearable?: boolean | undefined;
        disableCloseOnSelect?: boolean | undefined;
        filterOptions?: ((options: unknown[], state: import("@mui/base").FilterOptionsState<unknown>) => unknown[]) | undefined;
        filterSelectedOptions?: boolean | undefined;
        freeSolo?: boolean | undefined;
        getOptionDisabled?: ((option: unknown) => boolean) | undefined;
        getOptionKey?: ((option: unknown) => string | number) | undefined;
        getOptionLabel?: ((option: unknown) => string) | undefined;
        groupBy?: ((option: unknown) => string) | undefined;
        handleHomeEndKeys?: boolean | undefined;
        includeInputInList?: boolean | undefined;
        inputValue?: string | undefined;
        isOptionEqualToValue?: ((option: unknown, value: unknown) => boolean) | undefined;
        onHighlightChange?: ((event: import("react").SyntheticEvent<Element, Event>, option: unknown, reason: import("@mui/base").AutocompleteHighlightChangeReason) => void) | undefined;
        onInputChange?: ((event: import("react").SyntheticEvent<Element, Event>, value: string, reason: import("@mui/base").AutocompleteInputChangeReason) => void) | undefined;
        openOnFocus?: boolean | undefined;
        selectOnFocus?: boolean | undefined;
        helperText?: string | undefined;
        getChipIcon?: ((option: unknown) => any) | undefined;
    }>) => import("react/jsx-runtime").JSX.Element)[];
};
export default meta;
export type TeliTypeaheadStory = StoryObj<typeof TeliTypeahead>;
export { MultiSelect, FreeSolo };