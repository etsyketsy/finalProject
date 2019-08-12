# API Endpoints
*******
### Auth
*****
- [x] /api/auth/token/ POST: Get a new JWT by passing username and password.
- [x] /api/auth/token/refresh/ POST: Get a new JWT by passing an old still valid JWT.
- [x] /api/auth/token/verify/ POST: Verify a token by passing the token in the body.

### Search
*******
- [x] /api/search/ POST: Search for elements.

### Home
*****
- [x] /api/home/ 

### Donor
******
- [x] /api/donor/ GET: Get  the list pof all donors.
- [x] /api/donor/new/ POST: register a new donor.
- [x] /api/donor/<int:id>/ GET: Get  the  donor by ID.
- [x] /api/donor/<int:id>/ DELETE: Delete a donor by ID.
- [x] /api/donor/<int:id>/ POST: Update a donor by ID.

### Biopsy
********
- [x] /api/biopsy/ GET: Get  the list of all biopsies.
- [x] /api/biopsy/new/ POST: create a new Biopsy.
- [x] /api/biopsy/<int:id>/ GET: Get  the  biopsy by ID.
- [x] /api/biopsy/<int:id>/ DELETE: Delete a biopsy by ID.
- [x] /api/biopsy/<int:id>/ POST: Update a biopsy by ID.

 
### Sub-biopsy
**********
- [x] /api/subbiopsy/ GET: Get  the list of all subbiopsies.
- [x] /api/subbiopsy/new/ POST: create a new subbiopsy.
- [x] /api/subbiopsy/<int:id>/ GET: Get  the  subbiopsy by ID.
- [x] /api/subbiopsy/<int:id>/ DELETE: Delete a subbiopsy by ID.
- [x] /api/subbiopsy/<int:id>/ POST: Update a subbiopsy by ID.
- [x] /api/subbiopsy/biopsy/<int:id>/ GET: Get the list of subbiopsies by Biopsy ID.
- [x] /api/subbiopsy/parents/<int:id>/ GET: Get list of parent steps by sub-biopsy ID

### Comments
*********
- [x] /api/comments/<int>/ GET: Get the list of comments by numbering
- [x] /api/comments/<int>/ DELETE: Delete a comment by numbering
- [x] /api/comments/<int>/ POST: Update a comment by numbering.
- [x] /api/comments/ GET: Get all the comments.
- [x] /api/comments/?search=<str:search_string>/ GET: Search for a comment.

### Users
*****
- [x] /api/me/ GET: Get the user profile.
- [x] /api/me/ POST: Update the user profile.
- [x] /api/me/ DELETE: Delete the user profile.
- [x] /api/users/ GET: Get a list of all users.
- [x] /api/users/?search=<str:search_string>/ GET: Search for a user by name.

### SkinLayer
*********
- [x] /api/skinlayers/ Get a list of all skinlayer.
- [x] /api/skinlayer/new/ POST: create a new skinlayer entry.
- [x] /api/skinlayer/<int:id>/ GET: Get a skinlayer by ID.
- [x] /api/skinlayer/<int:id>/ POST: Update a skinlayer by ID.
- [x] /api/skinlayer/<int:id>/ DELETE: Delete a skinlayer by ID.
- [x] /api/skinlayer/subbiopsy/<int:id>/ GET: Get the list of skinlayer by subbiopsy ID.

### CellTypes
*********
- [x] /api/celltypes/ Get a list of all celltypes.
- [x] /api/celltypes/new/ POST: create a new celltypes entry.
- [x] /api/celltypes/<int:id>/ GET: Get a celltypes by ID.
- [x] /api/celltypes/<int:id>/ POST: Update a celltypes by ID.
- [x] /api/celltypes/<int:id>/ DELETE: Delete a celltype by ID.
- [x] /api/celltypes/skinlayer/<int:id>/ GET: Get the list of celltypes by skinlayer ID.
- [x] /api/celltypes/parents/<int:id>/ GET: Get list of parent steps by celltype ID.

### Enzyme
******
- [x] /api/enzyme/new/ POST: create a new enzyme entry.
- [x] /api/enzyme/<int:id>/ GET: Get a enzyme by ID.
- [x] /api/enzyme/<int:id>/ POST: Update a enzyme by ID.
- [x] /api/enzyme/<int:id>/ DELETE: Delete a enzyme by ID.
- [x] /api/enzyme/skinlayer/<int:id>/ GET: Get the list of enzyme by skinlayer ID.

### Passage
*******
- [x] /api/passages/ GET: Get  the list of all passages.
- [x] /api/passage/new/ POST: create a new passage.
- [x] /api/passage/<int:id>/ GET: Get  the  passage by ID.
- [x] /api/passage/<int:id>/ POST: Update a passage by ID.
- [x] /api/passage/<int:id>/ DELETE: Delete a passage by ID.
- [x] /api/passage/celltypes/<int:id>/ GET: Get the list of passage by celltypes ID.
- [x] /api/passage/parents/<int:id>/ GET: Get list of parent steps by passage ID.
