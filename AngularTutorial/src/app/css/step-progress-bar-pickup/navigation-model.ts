

export const PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_INACTIVE = '';
export const PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_ACTIVE = 'active';
export const PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_DONE = 'done';

//TEMP - TODO  translate in nav item component??
export const NAVIGATION_STATE_TEXT_LOCATION = 'WHERE.LOCATION.HEADER';

// NOT USED
// export const NAVIGATION_STATE_ID_LOCATION = 'location';
// export const NAVIGATION_STATE_URL_LOCATION = '/location';
export const NAVIGATION_STATE_ICON_INACTIVE_LOCATIION = 'assets/images/progress-bar/icons/grey/where.svg';
export const NAVIGATION_STATE_ICON_ACTIVE_LOCATIION = 'assets/images/progress-bar/icons/blue/where.svg';
export const NAVIGATION_STATE_ICON_DONE_LOCATIION = 'assets/images/progress-bar/icons/green/where.svg';

export const PROGRESS_BAR_UI_STATE_INACTIVE_LOCATION:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_INACTIVE_LOCATIION,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_INACTIVE
};

export const PROGRESS_BAR_UI_STATE_ACTIVE_LOCATION:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_ACTIVE_LOCATIION,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_ACTIVE
};

export const PROGRESS_BAR_UI_STATE_DONE_LOCATION:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_DONE_LOCATIION,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_DONE
};

//TEMP - TODO  translate in nav item component??
export const NAVIGATION_STATE_TEXT_PACKING = 'PACKING.HEADER';
export const NAVIGATION_STATE_TEXT_PICKUP_SCHEDULE = 'PICKUP_SCHEDULE.HEADER';

export const NAVIGATION_STATE_ID_PACKING = 'packing';
export const NAVIGATION_STATE_URL_PACKING = '/packing';
export const NAVIGATION_STATE_ICON_INACTIVE_PACKING = 'assets/images/progress-bar/icons/grey/what.svg';
export const NAVIGATION_STATE_ICON_ACTIVE_PACKING = 'assets/images/progress-bar/icons/blue/what.svg';
export const NAVIGATION_STATE_ICON_DONE_PACKING = 'assets/images/progress-bar/icons/green/what.svg';

export const PROGRESS_BAR_UI_STATE_INACTIVE_PACKING:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_INACTIVE_PACKING,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_INACTIVE
};

export const PROGRESS_BAR_UI_STATE_ACTIVE_PACKING:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_ACTIVE_PACKING,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_ACTIVE
};

export const PROGRESS_BAR_UI_STATE_DONE_PACKING:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_DONE_PACKING,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_DONE
};

//TEMP - TODO  translate in nav item component??
export const NAVIGATION_STATE_TEXT_DATETIME = 'DATETIME.HEADER';

export const NAVIGATION_STATE_ID_DATETIME = 'datetime';
export const NAVIGATION_STATE_URL_DATETIME = '/datetime';
export const NAVIGATION_STATE_ICON_INACTIVE_DATETIME = 'assets/images/progress-bar/icons/grey/when.svg';
export const NAVIGATION_STATE_ICON_ACTIVE_DATETIME = 'assets/images/progress-bar/icons/blue/when.svg';
export const NAVIGATION_STATE_ICON_DONE_DATETIME = 'assets/images/progress-bar/icons/green/when.svg';

export const PROGRESS_BAR_UI_STATE_INACTIVE_DATETIME:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_INACTIVE_DATETIME,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_INACTIVE
};

export const PROGRESS_BAR_UI_STATE_ACTIVE_DATETIME:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_ACTIVE_DATETIME,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_ACTIVE
};

export const PROGRESS_BAR_UI_STATE_DONE_DATETIME:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_DONE_DATETIME,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_DONE
};

export const PROGRESS_BAR_UI_STATE_INACTIVE_PICKUP_SCHEDULE:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_INACTIVE_DATETIME,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_INACTIVE
};

export const PROGRESS_BAR_UI_STATE_ACTIVE_PICKUP_SCHEDULE:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_ACTIVE_DATETIME,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_ACTIVE
};

export const PROGRESS_BAR_UI_STATE_DONE_PICKUP_SCHEDULE:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_DONE_DATETIME,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_DONE
};

//TEMP - TODO  translate in nav item component??
export const NAVIGATION_STATE_TEXT_REVIEW = 'GLOBAL.PROGRESS_BAR.SUBMIT';

export const NAVIGATION_STATE_ID_REVIEW = 'review';
export const NAVIGATION_STATE_URL_REVIEW = '/review';
export const NAVIGATION_STATE_ICON_INACTIVE_REVIEW = 'assets/images/progress-bar/icons/grey/submit.svg';
export const NAVIGATION_STATE_ICON_ACTIVE_REVIEW = 'assets/images/progress-bar/icons/blue/submit.svg';
export const NAVIGATION_STATE_ICON_DONE_REVIEW = 'assets/images/progress-bar/icons/green/submit.svg';

export const PROGRESS_BAR_UI_STATE_INACTIVE_REVIEW:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_INACTIVE_REVIEW,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_INACTIVE
};

export const PROGRESS_BAR_UI_STATE_ACTIVE_REVIEW:ProgressBarItemState = {
  icon: NAVIGATION_STATE_ICON_ACTIVE_REVIEW,
  state: PROGRESS_BAR_UI_STATE_CSS_CLASS_ID_ACTIVE
};

export const NAVIGATION_STATE_URL_CRM_REVIEW = 'crm';
export const NAVIGATION_STATE_ID_CRM_REVIEW = 'crm';
export const NAVIGATION_STATE_ID_CRM_CONFIRMATION = 'crm-confirmation'
export const NAVIGATION_STATE_URL_CRM_CONFIRMATION = '/crm-confirmation';
export const NAVIGATION_STATE_ID_CONFIRMATION = 'confirmation'
export const NAVIGATION_STATE_URL_CONFIRMATION = '/confirmation';

export interface NavigationState {
  progressBar?: ProgressBarItem[],
  navigation: {
    linkUrl: string,
    canNavigate: boolean
  },
};

export interface RequiresProgressBar {
  getProgressBarItems() : ProgressBarItem[];
}

/**
 * Used in components that contain summary panel
 * Some are 'read-only', non navigation screens,
 * user may not edit an in-sutu order e.g. confiramtion
 */
export interface CanNavigate {
  canNavigateUsingSummary():boolean
}

export interface ProgressBarItem {
  stepNumber: number,
  stateText: string,
  uiState: ProgressBarItemState
}

export interface ProgressBarItemState {
  /**
   * relative path to icon img asset
   */
  icon: string,
  /**
   * used for styling
   */
  state: string
}

export const PROGRESS_BAR_ACTIVE_LOCATION = {
  stepNumber: 1,
  stateText: NAVIGATION_STATE_TEXT_LOCATION,
  uiState: PROGRESS_BAR_UI_STATE_ACTIVE_LOCATION
};

export const PROGRESS_BAR_DONE_LOCATION = {
  stepNumber: 1,
  stateText: NAVIGATION_STATE_TEXT_LOCATION,
  uiState: PROGRESS_BAR_UI_STATE_DONE_LOCATION
};

export const PROGRESS_BAR_ACTIVE_PACKING = {
  stepNumber: 2,
  stateText: NAVIGATION_STATE_TEXT_PACKING,
  uiState: PROGRESS_BAR_UI_STATE_ACTIVE_PACKING
};

export const PROGRESS_BAR_INACTIVE_PACKING = {
  stepNumber: 2,
  stateText: NAVIGATION_STATE_TEXT_PACKING,
  uiState: PROGRESS_BAR_UI_STATE_INACTIVE_PACKING
}

export const PROGRESS_BAR_DONE_PACKING = {
  stepNumber: 2,
  stateText: NAVIGATION_STATE_TEXT_PACKING,
  uiState: PROGRESS_BAR_UI_STATE_DONE_PACKING
};

export const PROGRESS_BAR_ACTIVE_PICKUP_SCHEDULE = {
  stepNumber: 2,
  stateText: NAVIGATION_STATE_TEXT_PICKUP_SCHEDULE,
  uiState: PROGRESS_BAR_UI_STATE_ACTIVE_PICKUP_SCHEDULE
};

export const PROGRESS_BAR_INACTIVE_PICKUP_SCHEDULE = {
  stepNumber: 2,
  stateText: NAVIGATION_STATE_TEXT_PICKUP_SCHEDULE,
  uiState: PROGRESS_BAR_UI_STATE_INACTIVE_PICKUP_SCHEDULE
}

export const PROGRESS_BAR_DONE_PICKUP_SCHEDULE = {
  stepNumber: 2,
  stateText: NAVIGATION_STATE_TEXT_PICKUP_SCHEDULE,
  uiState: PROGRESS_BAR_UI_STATE_DONE_PICKUP_SCHEDULE
};

export const PROGRESS_BAR_ACTIVE_DATETIME = {
  stepNumber: 3,
  stateText: NAVIGATION_STATE_TEXT_DATETIME,
  uiState: PROGRESS_BAR_UI_STATE_ACTIVE_DATETIME
};

export const PROGRESS_BAR_INACTIVE_DATETIME = {
  stepNumber: 3,
  stateText: NAVIGATION_STATE_TEXT_DATETIME,
  uiState: PROGRESS_BAR_UI_STATE_INACTIVE_DATETIME
};

export const PROGRESS_BAR_DONE_DATETIME = {
  stepNumber: 3,
  stateText: NAVIGATION_STATE_TEXT_DATETIME,
  uiState: PROGRESS_BAR_UI_STATE_DONE_DATETIME
};


export const PROGRESS_BAR_ACTIVE_REVIEW = {
  stepNumber: 4,
  stateText: NAVIGATION_STATE_TEXT_REVIEW,
  uiState: PROGRESS_BAR_UI_STATE_ACTIVE_REVIEW
};

export const PROGRESS_BAR_INACTIVE_REVIEW = {
  stepNumber: 4,
  stateText: NAVIGATION_STATE_TEXT_REVIEW,
  uiState: PROGRESS_BAR_UI_STATE_INACTIVE_REVIEW
};

export const PROGRESS_BAR_ACTIVE_REVIEW_SCHEDULE = {
  stepNumber: 3,
  stateText: NAVIGATION_STATE_TEXT_REVIEW,
  uiState: PROGRESS_BAR_UI_STATE_ACTIVE_REVIEW
};

export const PROGRESS_BAR_INACTIVE_REVIEW_SCHEDULE = {
  stepNumber: 3,
  stateText: NAVIGATION_STATE_TEXT_REVIEW,
  uiState: PROGRESS_BAR_UI_STATE_INACTIVE_REVIEW
};


export const PROGRESS_BAR_LOCATION:ProgressBarItem[] = [
  PROGRESS_BAR_ACTIVE_LOCATION,
  PROGRESS_BAR_INACTIVE_PACKING,
  PROGRESS_BAR_INACTIVE_DATETIME,
  PROGRESS_BAR_INACTIVE_REVIEW
];

export const PROGRESS_BAR_PACKING:ProgressBarItem[] =
  [ PROGRESS_BAR_DONE_LOCATION,
    PROGRESS_BAR_ACTIVE_PACKING,
    PROGRESS_BAR_INACTIVE_DATETIME,
    PROGRESS_BAR_INACTIVE_REVIEW
  ];

export const PROGRESS_BAR_DATETIME:ProgressBarItem[] =
    [PROGRESS_BAR_DONE_LOCATION,
      PROGRESS_BAR_DONE_PACKING,
      PROGRESS_BAR_ACTIVE_DATETIME,
      PROGRESS_BAR_INACTIVE_REVIEW
    ];

export const PROGRESS_BAR_REVIEW:ProgressBarItem[] = [
  PROGRESS_BAR_DONE_LOCATION,
  PROGRESS_BAR_DONE_PACKING,
  PROGRESS_BAR_DONE_DATETIME,
  PROGRESS_BAR_ACTIVE_REVIEW
];

export const PROGRESS_BAR_SCHEDULE_LOCATION:ProgressBarItem[] =
  [ PROGRESS_BAR_ACTIVE_LOCATION,
    PROGRESS_BAR_INACTIVE_PICKUP_SCHEDULE,
    PROGRESS_BAR_INACTIVE_REVIEW_SCHEDULE
  ];

export const PROGRESS_BAR_PICKUP_SCHEDULE:ProgressBarItem[] =
  [ PROGRESS_BAR_DONE_LOCATION,
    PROGRESS_BAR_ACTIVE_PICKUP_SCHEDULE,
    PROGRESS_BAR_INACTIVE_REVIEW_SCHEDULE
  ];

export const PROGRESS_BAR_SCHEDULE_REVIEW:ProgressBarItem[] =
  [ PROGRESS_BAR_DONE_LOCATION,
    PROGRESS_BAR_DONE_PICKUP_SCHEDULE,
    PROGRESS_BAR_ACTIVE_REVIEW_SCHEDULE
  ];