.PHONY: コンテナ一覧
ps:
	docker compose ps -a

.PHONY: コンテナ起動
up:
	docker compose build --no-cache
	docker compose up -d
	@make package-install

.PHONY: コンテナ削除
down:
	docker compose down --rmi all --volumes --remove-orphans

.PHONY: パッケージインストール
package-install:
	docker compose exec -it app npm ci

.PHONY: コンテナにアタッチ
attach:
	docker compose exec -it app bash
