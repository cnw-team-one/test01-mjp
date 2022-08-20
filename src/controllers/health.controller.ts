import {GET, Path} from 'typescript-rest';

@Path('/health')
export class HealthController {

  @GET
  async healthCheck(): Promise<{status: string;}> {
    return {
      status: 'Hi I am UP from TechZone Automation'
    };
  }
}
