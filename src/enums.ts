'use strict';

export enum ResourceType {
    Projects = "docker-compose:projects",
    Project = "docker-compose:project",
    Services = "docker-compose:services",
    Service = "docker-compose:service",
    Container = "docker-compose:container",
    RunningContainer = "docker-compose:running-container",
    ExitedContainer = "docker-compose:exited-container"
}
