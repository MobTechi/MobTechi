import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoMetaData } from 'src/app/model/seo.model';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private titleService: Title, private metaTagService: Meta) {
  }

  public setMetaData = (seo: SeoMetaData) => {

    try {
      this.titleService.setTitle(seo.title);
      this.cleanUpMetaData();
      this.metaTagService.addTags([
        { name: 'keywords', content: seo.keywords.join(', ') },
        { name: 'robots', content: seo.robots.join(', ') },
        { name: 'description', content: seo.description },
        { charset: 'UTF-8' },
      ]);
    } catch (e) {
      console.warn('Unknown error occurred while setting Meta Tags ===> ', e);
    }
  };

  public cleanUpMetaData = () => {
    this.metaTagService.removeTag('name=keywords');
    this.metaTagService.removeTag('name=robots');
    this.metaTagService.removeTag('name=authors');
    this.metaTagService.removeTag('name=description');
  };
}
