import {GET, Path} from 'typescript-rest';

@Path('/health')
export class HealthController {

  @GET
  async healthCheck(): Promise<{status: string, message: string;}> {
    return {
      status: 'UP',
      message: 'App is up and running with TechZone Automation'
    };
  }
}
