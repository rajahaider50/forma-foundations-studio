package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun FoldersScreen(onCreate:()->Unit){Card{Column{Text("Folders");Text("Domain-specific folders workflow");Button(onClick=onCreate){Text("Create")}}}}
