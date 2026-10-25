data "external_schema" "gorm" {
    program = [
        "go",
        "run",
        "-mod=mod",
        "ariga.io/atlas-provider-gorm",
        "load",
        "--path", "../internal/models",
        "--dialect", "postgres"
    ]
}
env "gorm" {
    src = data.external_schema.gorm.url
    dev = "docker://postgres/18/dev"
    url = getenv("DB_URL")
    migration {
        dir = "file://..//migrations"
    }
    format {
        migrate {
            diff = "{{ sql . \" \" }}"
        }
    }
}

# atlas migrate diff --env gorm
# atlas migrate validate --env gorm
# atlas migrate apply --env gorm