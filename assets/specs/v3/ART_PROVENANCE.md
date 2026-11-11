# V3 美術製作紀錄

- 視覺方向：使用者選定的 3D Q 版玩具模型／立體繪本風格。
- 參考圖：`assets/reference-v3-selected-style.png`。
- 場景：以 `generate2dmap` 規格規劃，透過 ImageGen 產生四張無文字、無角色的 16:9 場景，再以百分比座標建立碰撞、出生點與任務點資料。
- 角色：以 `generate2dsprite` 規格規劃，透過 ImageGen 產生透明背景角色主圖，再由 `master_still.py approve` 完成去背、尺寸、色鍵與邊緣檢查。
- 使用中的角色主圖：`assets/images/v3/characters/*/master_rgba.png`。
- 使用中的地圖：`assets/images/v3/map-*-3d.png`。
- 生成圖均未加入可讀文字，介面文字由 HTML/CSS 呈現，避免圖中文字失真並支援響應式版面。

## 場景共同提示重點

Bright polished 3D chibi toy-diorama educational adventure game environment, Taiwanese elementary school atmosphere, navy blue and warm gold design language, rounded architecture, lush landscaping, broad readable walkways, soft global illumination, clean family-friendly composition, 16:9, no people, no characters, no words, no labels, no UI.

## 角色共同提示重點

Full-body 3D chibi toy-diorama game character, Taiwanese elementary school setting, friendly expressive face, navy/gold school-adventure visual language, centered single character, clean transparent background, no text, no extra people, readable silhouette for web-game use.
