import './sources.css';
import { NewsItem } from '../../../types/data.interface';
import { isNullOrUndefined } from '../../../types/typeCheck.functions';

class Sources<T extends NewsItem> {
    draw(data: T[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = isNullOrUndefined(document.querySelector<HTMLTemplateElement>('#sourceItemTemp'));

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            if (sourceClone instanceof HTMLTemplateElement) {
                isNullOrUndefined(sourceClone.querySelector('.source__item-name')).textContent = item.name;
                isNullOrUndefined(sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);
                fragment.append(sourceClone);
            }
        });

        isNullOrUndefined(document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
