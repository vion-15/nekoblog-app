# syntax=docker/dockerfile:1

FROM golang:1.26-alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -o /auth-service-backend ./CMD/server

FROM builder AS auth-test

RUN go test -v ./...

FROM gcr.io/distroless/base-debian12 AS build-release

WORKDIR /

COPY --from=builder /auth-service-backend /auth-service-backend

EXPOSE 8080

USER nonroot:nonroot

ENTRYPOINT ["/auth-service-backend"]