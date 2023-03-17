import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  // const a = () => import('./hero-job-ad.component').then((o) => o.HeroJobAdComponent);
  getAds() {
    return [
      new AdItem(
        import('./hero-profile.component').then((o) => o.HeroProfileComponent),
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new AdItem(
        import('./hero-job-ad.component').then((o) => o.HeroJobAdComponent),
        {
          headline: 'Hiring for several positions',
          body: 'Submit your resume today!',
        }
      ),
    ];
  }
}
