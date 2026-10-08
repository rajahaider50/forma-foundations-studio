package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun NotesScreen(onCreate:()->Unit){Card{Column{Text("Notes");Text("Domain-specific notes workflow");Button(onClick=onCreate){Text("Create")}}}}
