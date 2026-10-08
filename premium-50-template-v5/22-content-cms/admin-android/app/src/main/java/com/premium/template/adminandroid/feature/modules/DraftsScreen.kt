package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun DraftsScreen(onCreate:()->Unit){Card{Column{Text("Drafts");Text("Domain-specific drafts workflow");Button(onClick=onCreate){Text("Create")}}}}
