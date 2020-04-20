import * as React from "react";

export interface IconProps {
  a11yTitle?: string;
  color?: string;
  size?: "small" | "medium" | "large" | "xlarge" | string;
}

export type Icon = React.ComponentType<IconProps & JSX.IntrinsicElements['svg']>;

export declare const RoundCheckMarkEmpty: Icon;
export declare const Activity: Icon;
export declare const ActivitySelected: Icon;
export declare const Add: Icon;
export declare const Alarms: Icon;
export declare const Battery: Icon;
export declare const Close: Icon;
export declare const EnhancedDialogue: Icon;
export declare const Explicit: Icon;
export declare const Favorite: Icon;
export declare const FavoriteSelected: Icon;
export declare const Group: Icon;
export declare const Home: Icon;
export declare const HomeTheater: Icon;
export declare const JumpBack: Icon;
export declare const JumpForward: Icon;
export declare const Menu: Icon;
export declare const More: Icon;
export declare const Mute: Icon;
export declare const NightMode: Icon;
export declare const Pause: Icon;
export declare const Play: Icon;
export declare const Playlist: Icon;
export declare const Queue: Icon;
export declare const Repeat: Icon;
export declare const RepeatOnce: Icon;
export declare const Rooms: Icon;
export declare const RoundCheckmark: Icon;
export declare const RoundCheckmarkActive: Icon;
export declare const RoundCheckmarkInactive: Icon;
export declare const Settings: Icon;
export declare const Shuffle: Icon;
export declare const SkipBack: Icon;
export declare const SkipForward: Icon;
export declare const Stop: Icon;
export declare const Volume: Icon;
export declare const VolumeLow: Icon;
export declare const VolumeOff: Icon;
export declare const Blank: Icon;
