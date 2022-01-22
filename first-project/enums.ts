enum Roles {
    SUPER_ADMIN,
    STORE_ADMIN,
    SECTION_ADMIN,
    MANAGER,
    USER,
    DRIVER
}

enum Status {
    INCOMING = 1,
    INPROGRESS,
    DELIVERED,
    COMPLETED,
    CANCELLED,
}

enum Error_Status {
    NO_ERROR = 0,
    INVALID = -1,
    AUTH = -2,
    DATA_MISSING = -3
}
