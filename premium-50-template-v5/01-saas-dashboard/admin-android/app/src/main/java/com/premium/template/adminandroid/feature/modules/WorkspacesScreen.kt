package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun WorkspacesScreen(onCreate:()->Unit){Card{Column{Text("Workspaces");Text("Domain-specific workspaces workflow");Button(onClick=onCreate){Text("Create")}}}}
